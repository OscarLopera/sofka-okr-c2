package co.com.sofka.okr.c2.model.usuarios.values;

import java.util.Objects;

public class FirstTime {
    private final Boolean value;

    public FirstTime(Boolean value) {
        this.value = value;
       // this.value = Objects.requireNonNull(value,"The required user first time");
    }

    public Boolean getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FirstTime that = (FirstTime) o;
        return Objects.equals(value, that.value);
    }

    public static FirstTime of(Boolean value){
        return new FirstTime(value);
    }


    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
