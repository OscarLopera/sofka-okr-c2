package co.com.sofka.okr.c2.model.vertical;
import co.com.sofka.okr.c2.model.vertical.values.VerticalName;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Vertical {
    private String id;
    private VerticalName verticalname;

    public Vertical() {
    }

    public Vertical(String id, VerticalName verticalname) {
        this.id = id;
        this.verticalname = verticalname;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public VerticalName getVerticalname() {
        return verticalname;
    }

    public void setVerticalname(VerticalName verticalname) {
        this.verticalname = verticalname;
    }
}
