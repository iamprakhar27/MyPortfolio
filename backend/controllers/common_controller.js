import { request, response } from "express";
import contactmodel from "../models/contact.models.js";

export const addcontact = async(request,response) => {
    const contactobject = request.body
    console.log(contactobject);
    const {name,email,message} = contactobject
    try{
        const contactdoc = new contactmodel(
               {
                name:name,email:email,message:message
               }
        )
        await contactdoc.save()
        response.send("thank you for contacting!")

    }
    catch(error)
    {
        console.log("error loading data" + error);
    }
}