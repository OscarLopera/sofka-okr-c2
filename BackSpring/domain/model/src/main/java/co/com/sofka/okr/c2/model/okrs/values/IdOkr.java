package co.com.sofka.okr.c2.model.okrs.values;

import java.util.Objects;

public class IdOkr {

    private final String value;

    public IdOkr(String value) {
        Objects.requireNonNull(value, "El id del OKR no puede ser nulo");
        if (value == ""){
            throw new IllegalArgumentException("El id no debe ser vacío");
        }
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
