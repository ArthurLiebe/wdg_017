// You can work here or download the template
// Your components go here

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='About'>About</a>
                </li>
                <li>
                    <a href='Links'>Links</a>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => {
    return (
        <header>
            <h1>React</h1>
            <Navigation />
        </header>
    );
};

const Hero = () => {
    return (
        <section>
            <p>
                Hero - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam ab nam eveniet aliquam nesciunt assumenda cupiditate,
                reprehenderit dolore ipsum quas facilis beatae doloribus
                temporibus in. Nostrum tenetur totam magnam similique. Nemo
                ipsam repellat dolorem non, quisquam dolore nihil facilis nulla
                numquam, aliquid odit debitis. Dolorum eveniet eius numquam
                saepe a laborum deserunt distinctio ea accusamus, nesciunt
                minima veniam, quasi eum. Eveniet distinctio velit fugit, sequi
                sit magni porro similique rerum ex, voluptatum accusantium
                deserunt corporis reiciendis? Corporis vero eos reprehenderit,
                delectus incidunt officia qui voluptas aliquam saepe est
                veritatis voluptate.
            </p>
        </section>
    );
};

const Services = () => {
    return (
        <section>
            <p>
                Services - Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Delectus, provident.
            </p>
        </section>
    );
};

const Footer = () => {
    return <footer>Good Bye!</footer>;
};

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Footer />
        </div>
    );
};

export default App;
