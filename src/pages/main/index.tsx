import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import "./style.css"
export const MainPage = () => {
    return (
        <div className="main-page">
            <Header />
            <main className="main-page__blocks">
                <div className="main-page__block">
                <div className="main-page__descriptions">
                    <span>
                        СОЗДАЕМ ДИЗАЙН-ПРОЕКТЫ ИНТЕРЬЕРА. РЕАЛИЗУЕМ
                    </span>
                    <span>
                        ДЕКОРИРУЕМ ИНТЕРЬЕР ТЕКСТИЛЕМ.
                    </span>
                </div>
                <img className="main-page__slider" src="" alt="слайдер" />
                </div>
                <div className="main-page__block">
                    <span>
                        КАЖДЫЙ ЧЕЛОВЕК ПО СВОЕЙ ПРИРОДЕ ТВОРЕЦ.ДАВАЙТЕ СОЗДАВАТЬ ВМЕСТЕ!
                    </span>
                    <img className="main-page__slider" src="" alt="слайдер" />
                </div>
            </main>
            <Footer/>
        </div>
    )
}