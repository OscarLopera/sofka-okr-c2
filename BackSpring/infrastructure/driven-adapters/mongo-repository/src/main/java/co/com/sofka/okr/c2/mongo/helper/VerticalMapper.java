package co.com.sofka.okr.c2.mongo.helper;

import co.com.sofka.okr.c2.model.vertical.Vertical;
import co.com.sofka.okr.c2.model.vertical.values.VerticalName;
import co.com.sofka.okr.c2.mongo.entities.VerticalEntity;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class VerticalMapper {

    public Function<VerticalEntity, Vertical> fromVerticalEntityToVertical() {
        return newEntity -> new Vertical(
                newEntity.getId(),
                new VerticalName(newEntity.getVerticalname())

        );
    }

}
