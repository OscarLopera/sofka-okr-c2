package co.com.sofka.okr.c2.model.usuarios.values;

import co.com.sofka.okr.c2.model.okrs.values.Objective;

import java.util.Objects;

public class VerticalId {
    private final String value;

    public VerticalId(String value) {
       this.value = value;
        /*// this.value = Objects.requireNonNull(value,"the vertical field of the user is required");
        if (this.value.isEmpty()){
            throw new IllegalArgumentException("the vertical field of the user cannot be empty");
        }*/
    }

    public String getValue() {
        return value;
    }

    public static VerticalId of(String value){
        return new VerticalId(value);
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VerticalId that = (VerticalId) o;
        return Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }

}
