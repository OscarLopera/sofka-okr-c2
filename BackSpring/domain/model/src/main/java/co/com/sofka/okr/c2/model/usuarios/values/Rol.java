package co.com.sofka.okr.c2.model.usuarios.values;

import java.util.Objects;

public class Rol {
    private final String value;

    public Rol(String value) {
      this.value = value;
       /* this.value = Objects.requireNonNull(value,"The required user roles");
        if (this.value.isEmpty()){
            throw new IllegalArgumentException("the role field cannot be empty");
        }*/
    }

    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Rol rol = (Rol) o;
        return Objects.equals(value, rol.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
