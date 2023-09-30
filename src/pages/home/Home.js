import BookCard from '../../components/BookCard/BookCard';
import BookList from '../../components/BookList/BookList';
import ChooseYourBook from '../../components/ChooseYourBook/ChooseYourBook';
import Footer from '../../components/Footer/Footer';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import ReadDown from '../../components/ReadDown/ReadDown';
import Slider from '../../components/Slider/Slider';
import ViewBlog from '../../components/ViewBlog/ViewBlog';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';
import './Home.css';

export default function Home() {
    return (
        <div className='home'>
            <Slider />
            <BookList />
            <GetInTouch />
            <ChooseYourBook />
            <ReadDown />
            <ViewBlog />
        </div>
    )
}