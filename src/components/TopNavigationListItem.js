import { Link } from 'react-router-dom'

function TopNavigationListItem(props) {

    const MENU_ITEMS = [
        ['Post Lists', '/'],
        ['Add Posts', '/add-post'],
        ['User Account', '/user']
    ];

    return (
        MENU_ITEMS.map(
            (item, id) => {
                return (
                    <li key={id}>
                        <Link
                            onClick={(event) => props.onClick(event.target.value)}
                            className="cursor-pointer border-b block p-5"
                            to={item[1]}
                        >
                            {item[0]}
                        </Link>
                    </li>
                );
            }
        )
    )
}

export default TopNavigationListItem;