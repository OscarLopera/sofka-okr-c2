package co.com.sofka.okr.c2.model.vertical.values;

import java.util.Objects;

public class VerticalName {

    private final String value;

    public VerticalName(String value) {
        this.value = Objects.requireNonNull(value,"The required vertical name");
        if (this.value.isEmpty()){
            throw new IllegalArgumentException("the verticalname field cannot be empty");
        }

    }

    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VerticalName that = (VerticalName) o;
        return Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
