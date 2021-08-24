
import FilmList from "../components/FilmList/FilmList";
import Section from "../components/Section/Section";
import Title from "../components/Title/Title";

export default function HomePage(){
    return (
        <Section>
            <Title title={ 'Trending today'}/>
            <FilmList/>
        </Section>

    )
}