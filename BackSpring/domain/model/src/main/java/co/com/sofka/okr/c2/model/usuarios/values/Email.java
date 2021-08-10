package co.com.sofka.okr.c2.model.usuarios.values;

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

       if (!value.matches("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")){
           throw new IllegalArgumentException("The email is not valid");
       }
    }

    public String getValue() {
        return value;
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
