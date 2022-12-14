const MyHeader = ({ leftChild, headerText, rightChild }) => {
    return <header>
        <div className="header__btn-left">{leftChild}</div>
        <h1 className="header__text">{headerText}</h1>
        <div className="header__btn-right">{rightChild}</div>
    </header>   
}

export default MyHeader;