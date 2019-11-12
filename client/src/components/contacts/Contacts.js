import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import Contactcontext from '../../context/contact/contactContext';
import Spinner from '../layout/Spinner';

const Contacts = () => {
    const contactContext = useContext(Contactcontext);

    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if (contacts && contacts.length === 0 && !loading) {
        return <h4>Please add a contact</h4>;
    }
    
    return (
        <Fragment>
            {contacts !== null && !loading ? 
                (<TransitionGroup>
                    {filtered !== null ? 
                        filtered.map(contact => (
                            <CSSTransition key={contact._id} timeout={1000} classNames="item">
                                <ContactItem contact={contact} />
                            </CSSTransition>
                        )) : 
                        contacts.map(contact => (
                            <CSSTransition key={contact._id} timeout={1000} classNames="item">
                                <ContactItem contact={contact} />
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>) : 
                <Spinner />}
        </Fragment>
    )
}

export default Contacts;
