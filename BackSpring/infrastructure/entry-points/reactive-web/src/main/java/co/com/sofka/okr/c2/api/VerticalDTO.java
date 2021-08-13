package co.com.sofka.okr.c2.api;



public class VerticalDTO {

    private String id;
    private String verticalname;

    public VerticalDTO() {
    }

    public VerticalDTO(String id, String verticalname) {
        this.id = id;
        this.verticalname = verticalname;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getVerticalname() {
        return verticalname;
    }

    public void setVerticalname(String verticalname) {
        this.verticalname = verticalname;
    }
}
