package co.com.sofka.okr.c2.model.okrs.values;

import java.util.Objects;

public class Title {

    private final String value;


    public Title(String value) {
        Objects.requireNonNull(value, "El título del OKR no puede ser nulo");
        if (value == ""){
            throw new IllegalArgumentException("El título del OKR no debe ser vacío");
        }
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
