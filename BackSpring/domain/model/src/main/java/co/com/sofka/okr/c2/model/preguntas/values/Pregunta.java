package co.com.sofka.okr.c2.model.preguntas.values;

import java.util.Objects;

public class Pregunta {

    private final String value;

    public Pregunta(String value) {
        this.value = Objects.requireNonNull(value,"The required Pregunta name");
        if (this.value.isEmpty()){
            throw new IllegalArgumentException("the Pregunta field cannot be empty");
        }

    }

    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pregunta pregunta = (Pregunta) o;
        return Objects.equals(value, pregunta.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
