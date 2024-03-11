package com.swapit.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@Table(name = "conjoint")
public class Couple implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idCouple;

    @ManyToOne
    private UserPige firstConjoint;

    @ManyToOne
    private UserPige secondConjoint;

}
