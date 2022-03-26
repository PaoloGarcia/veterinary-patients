type HeaderProps = {
    title?: string;
};

function Header({ title = "" }: HeaderProps): JSX.Element {
    return (
        <header>
            <h1 className="text-center">
                {title}
            </h1>
        </header>
    );
}

export default Header;
