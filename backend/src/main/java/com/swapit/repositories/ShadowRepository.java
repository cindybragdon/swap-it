package com.swapit.repositories;

import com.swapit.model.Shadow;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShadowRepository extends JpaRepository<Shadow, Integer> {



    //Verifies if the email / password combination exists for account connection or forgot pwd (select)
    public Shadow findByUser_UserEmailAndUserPassword(String email,String password);

    //Verifies if the email / phone combination exists for 2FA
    public Shadow findByUser_UserPhoneAndUserPassword(String phone, String password);

    public Shadow findByUser_IdUser(Integer idUser);

    public Shadow findByUser_UserEmail(String userEmail);

    public boolean existsByUser_IdUser(Integer idUser);


}

