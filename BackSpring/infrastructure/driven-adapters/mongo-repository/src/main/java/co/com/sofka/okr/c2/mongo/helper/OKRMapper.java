package co.com.sofka.okr.c2.mongo.helper;

import co.com.sofka.okr.c2.model.okrs.OKRS;
import co.com.sofka.okr.c2.model.okrs.values.Description;
import co.com.sofka.okr.c2.model.okrs.values.IdOkr;
import co.com.sofka.okr.c2.model.okrs.values.Objective;
import co.com.sofka.okr.c2.model.okrs.values.Title;
import co.com.sofka.okr.c2.model.usuarios.values.VerticalId;
import co.com.sofka.okr.c2.mongo.entities.OKREntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.function.Function;

@Component
public class OKRMapper {
    public Function<OKREntity, OKRS> fromOKREntity() {
        return newEntity -> new OKRS(
                new IdOkr(newEntity.getId()),
                new Objective(newEntity.getObjective()),
                new Title(newEntity.getTitle()),
                newEntity.getManagerId(),
                new Description(newEntity.getDescription()),
                new VerticalId(newEntity.getVerticalId()),
                newEntity.getAreaInCharge(),
                newEntity.getProgress(),
                newEntity.getHistoricalProgress(),
                new ArrayList<>()
        );
    }
    

}
