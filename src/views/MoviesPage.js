import SearchForm from "../components/SearchForm/SearchForm";
import FilmList from "../components/FilmList/FilmList";
import Section from "../components/Section/Section";
// import Title from "../components/Title/Title";

export default function MoviesPage(){
    return (
        <Section>
            <SearchForm />
            {/* <Title title={ 'Trending today'}/> */}
            <FilmList/>
        </Section>

    )
}