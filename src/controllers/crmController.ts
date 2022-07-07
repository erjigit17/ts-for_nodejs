import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import {Request, Response} from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

interface ResponseError extends Error {
    status?: number;
}

export const addNewContact = (req: Request, res: Response) => {
    let newContact = new Contact(req.body);

    newContact.save((err: ResponseError, contact: any) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContacts = (req: Request, res: Response) => {
    Contact.find({}, (err: ResponseError, contact: any) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContactWithID = (req: Request, res: Response) => {
    Contact.findById(req.params.contactId, (err: ResponseError, contact: any) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const updateContact = (req: Request, res: Response) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

export const deleteContact = (req: Request, res: Response) => {
    Contact.remove({ _id: req.params.contactId }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact'});
    })
}