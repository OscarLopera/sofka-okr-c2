package co.com.sofka.okr.c2.model.okrs.values;
import java.util.Objects;

public class KRId {
    private final String value;

    public KRId(String value){
        Objects.requireNonNull(value, "El id del KR no puede ser nulo");
        if (value == ""){
            throw new IllegalArgumentException("El id no debe ser vacío");
        }
        this.value = value;
    }
}
