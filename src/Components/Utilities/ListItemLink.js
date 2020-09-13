import React, {forwardRef, useMemo} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const ListItemLink = (props) => {
    const { icon, primary, secondary, to, classname } = props;

    const renderLink = useMemo(
        () => forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
        [to]
    );

    return (
        <li>
            <ListItem button component={renderLink} className={classname}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} secondary={secondary}/>
            </ListItem>
        </li>
    );
}

export default ListItemLink;