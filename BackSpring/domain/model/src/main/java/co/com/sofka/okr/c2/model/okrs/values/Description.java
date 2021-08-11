package co.com.sofka.okr.c2.model.okrs.values;

import java.util.Objects;

public class Description {

    private final String value;

    public Description(String value) {
        Objects.requireNonNull(value, "La descripción del OKR no puede ser nulo");
        if (value == ""){
            throw new IllegalArgumentException("La descripción del OKR no debe ser vacío");
        }
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static Description of(String value){
        return new Description(value);
    }
}
