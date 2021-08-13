package co.com.sofka.okr.c2.model.usuarios.values;

import java.util.Objects;

public class Name {
    private final String value;

    public Name(String value) {
        this.value = Objects.requireNonNull(value,"The required user name");
        if (this.value.isEmpty()){
            throw new IllegalArgumentException("the name field cannot be empty");
        }
    }

    public String getValue() {
        return value;
    }

    public static Name of(String value){
        return new Name(value);
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Name name = (Name) o;
        return Objects.equals(value, name.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
