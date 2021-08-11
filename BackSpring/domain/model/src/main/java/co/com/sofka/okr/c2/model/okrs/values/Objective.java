package co.com.sofka.okr.c2.model.okrs.values;

import java.util.Objects;

public class Objective {

    private final String value;

    public Objective(String value) {
        Objects.requireNonNull(value, "El objetivo del OKR no puede ser nulo");
        if (value == ""){
            throw new IllegalArgumentException("El objetivo no debe ser vacío");
        }
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static Objective of(String value){
        return new Objective(value);
    }
}
