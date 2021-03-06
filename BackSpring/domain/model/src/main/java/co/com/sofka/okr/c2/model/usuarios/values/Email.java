package co.com.sofka.okr.c2.model.usuarios.values;

import co.com.sofka.okr.c2.model.okrs.values.Objective;

import java.util.Objects;

public class Email {
    private final String value;

    public Email(String value) {
        this.value = Objects.requireNonNull(value);
        if(this.value.isEmpty()){
            throw new IllegalArgumentException("The email cannot be empty");
        }

        if (this.value.length() <= 5){
            throw new IllegalArgumentException("The email must be greater than 5 characters");
        }
    }

    public String getValue() {
        return value;
    }

    public static Email of(String value){
        return new Email(value);
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Email email = (Email) o;
        return Objects.equals(value, email.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
