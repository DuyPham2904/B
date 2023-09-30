import axios from "axios";
import swal from "sweetalert";
import { createContext, useEffect, useState } from "react";
export const AppContext = createContext({});
export function AppProvider({ children }) {
    const [count, setCount] = useState(1);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [newBook, setNewBook] = useState({});

    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Xi2GZHoZgcshVvC9NLhAWSkeL5hnjUZC`)
            .then(res => {
                const books = res?.data?.results?.books || [];
                setProducts(books);
            })
            .catch(error => console.log(error));
        if (localStorage.getItem('book_list')) {
            const newCart = JSON.parse(localStorage.getItem('book_list'));
            setCart(newCart)
        }
    }, [])
    const addCart = (id) => {
        let item = products.find(item => item.rank == id)
        const index = cart.findIndex(item => item.rank == id)
        let amount = new Number(document.querySelector('.bookdetail_btn_amount').value);
        if (index >= 0) {
            let newCart = cart;
            newCart[index].price += amount;
            setCart(newCart);
            localStorage.setItem('book_list', JSON.stringify(newCart));
        } else {
            item.price = amount;
            setCart([...cart, item])
            localStorage.setItem('book_list', JSON.stringify([...cart, item]));
        }
    }

    const deleteCart = (id) => {
        let newCart = cart.filter(item => item.rank != id)
        setCart(newCart);
        localStorage.setItem('book_list', JSON.stringify(newCart));
    }

    const handle_Increase = (id) => {
        const newCart = cart.map(item => item.rank == id ? { ...item, 'price': item.price + 1 } : { ...item })
        setCart(newCart);
        localStorage.setItem('book_list', JSON.stringify(newCart));
    }
    const handle_Decrease = (id) => {
        const newCart = cart.map(item => item.rank == id && item.price > 1 ? { ...item, 'price': item.price - 1 } : { ...item })
        setCart(newCart);
        localStorage.setItem('book_list', JSON.stringify(newCart));
    }

    const showDetail = (id) => {
        let bookDetail = products.filter(item => item.rank == id)
        setNewBook(...bookDetail);
        if (localStorage.getItem('newBook')) {
            window.localStorage.removeItem('newBook')
            localStorage.setItem('newBook', JSON.stringify(...bookDetail));
        } else {
            localStorage.setItem('newBook', JSON.stringify(...bookDetail));
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    return (
        <AppContext.Provider value={{ newBook, count, setCount, products, cart, addCart, deleteCart, handle_Decrease, handle_Increase, showDetail }}>
            {children}
        </AppContext.Provider>
    )

}