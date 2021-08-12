package co.com.sofka.okr.c2.model.usuarios.values;

import java.util.Objects;

public class Phone {
    private final String value;

    public Phone(String value) {
        this.value = Objects.requireNonNull(value,"The required user phone");
        if (this.value.isEmpty()){
            throw new IllegalArgumentException("the phone field cannot be empty");
        }
    }

    public String getValue() {
        return value;
    }

    public static Phone of(String value){
        return new Phone(value);
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Phone phone = (Phone) o;
        return Objects.equals(value, phone.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
