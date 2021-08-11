package co.com.sofka.okr.c2.model.preguntas.values;

import java.util.Objects;

public class Respuesta {

    private final String value;

    public Respuesta(String value) {
        this.value = Objects.requireNonNull(value,"The required Respuesta name");
        if (this.value.isEmpty()){
            throw new IllegalArgumentException("the Respuesta field cannot be empty");
        }

    }

    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Respuesta respuesta = (Respuesta) o;
        return Objects.equals(value, respuesta.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
