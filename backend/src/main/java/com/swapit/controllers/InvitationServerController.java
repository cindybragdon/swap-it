package com.swapit.controllers;


import com.swapit.model.Invitations;
import com.swapit.model.Pige;
import com.swapit.model.User;
import com.swapit.repositories.InvitationsRepository;
import com.swapit.repositories.PigeRepository;
import com.swapit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")


public class InvitationServerController {

    @Autowired
    private InvitationsRepository invitationsRepository;

    private PigeRepository pigeRepository;

    //Creates an invitation to be sended by email
    @PostMapping("/createInvitation")
    public String createInvitation(@RequestBody Invitations invitationsToCreate) throws Exception{
        String messageInvitation = "ACK-401";
        try{
            if (invitationsToCreate.getPige() != null
            && invitationsToCreate.getEmailWantedUser() != null) {
                invitationsRepository.save(invitationsToCreate);
                messageInvitation = "ACK-400";
            }
        }catch (Exception e){
            return messageInvitation + e.getMessage();
        }
        return messageInvitation;

    }

}