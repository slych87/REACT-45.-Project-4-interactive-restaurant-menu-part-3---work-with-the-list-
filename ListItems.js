const ListItems = (props) => {
    const items = props.items.map(item => (
        <Item
            key={item.id}
            name={item.name}
            active={item.active}
        />
    ))
    console.log(items);
    return (
        <div className="list">
            <h1>Twoje zamówien</h1>
            <ul>
                {items}
            </ul>
        </div>
    )
}