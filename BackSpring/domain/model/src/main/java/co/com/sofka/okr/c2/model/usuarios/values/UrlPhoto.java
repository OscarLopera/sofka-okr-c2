package co.com.sofka.okr.c2.model.usuarios.values;

import java.util.Objects;

public class UrlPhoto {
    private final String value;

    public UrlPhoto(String value) {
        this.value = Objects.requireNonNull(value,"the url of the photo is required");
        if (this.value.isEmpty()){
            throw new IllegalArgumentException("the url field of the photo cannot be empty");
        }
    }

    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UrlPhoto urlPhoto = (UrlPhoto) o;
        return Objects.equals(value, urlPhoto.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
