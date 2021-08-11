package co.com.sofka.okr.c2.mongo.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "verticales")
public class VerticalEntity {

    @Id
    private String id;
    private String verticalname;

    public VerticalEntity() {
    }

    public VerticalEntity(String id, String verticalname) {
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
