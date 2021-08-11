package co.com.sofka.okr.c2.model.okrs;
import co.com.sofka.okr.c2.model.okrs.values.*;
import co.com.sofka.okr.c2.model.usuarios.values.VerticalId;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder(toBuilder = true)
public class OKRS {

    private IdOkr id;
    private Objective objective;
    private Title title;
    private String managerId;
    private Description description;
    private VerticalId verticalId;
    private Double progress;
    private List<HistoricalProgress> historicalProgress;
    private List<KRS> krs;

    public OKRS() {
    }

    public OKRS(IdOkr id, Objective objective, Title title, String managerId, Description description, VerticalId verticalId,  Double progress, List<HistoricalProgress> historicalProgress, List<KRS> krs) {
        this.id = id;
        this.objective = objective;
        this.title = title;
        this.managerId = managerId;
        this.description = description;
        this.verticalId = verticalId;
        this.progress = progress;
        this.historicalProgress = historicalProgress;
        this.krs = krs;
    }

    public OKRS(IdOkr id, Objective objective, Title title, String managerId, Description description, VerticalId verticalId, Double progress) {
        this.id = id;
        this.objective = objective;
        this.title = title;
        this.managerId = managerId;
        this.description = description;
        this.verticalId = verticalId;
        this.progress = progress;
    }

    public IdOkr getId() {
        return id;
    }

    public void setId(IdOkr id) {
        this.id = id;
    }

    public Objective getObjective() {
        return objective;
    }

    public void setObjective(Objective objective) {
        this.objective = objective;
    }

    public Title getTitle() {
        return title;
    }

    public void setTitle(Title title) {
        this.title = title;
    }

    public String getManagerId() {
        return managerId;
    }

    public void setManagerId(String managerId) {
        this.managerId = managerId;
    }

    public Description getDescription() {
        return description;
    }

    public void setDescription(Description description) {
        this.description = description;
    }

    public VerticalId getVerticalId() {
        return verticalId;
    }

    public void setVerticalId(VerticalId verticalId) {
        this.verticalId = verticalId;
    }



    public Double getProgress() {
        return progress;
    }

    public void setProgress(Double progress) {
        this.progress = progress;
    }

    public List<HistoricalProgress> getHistoricalProgress() {
        return historicalProgress;
    }

    public void setHistoricalProgress(List<HistoricalProgress> historicalProgress) {
        this.historicalProgress = historicalProgress;
    }

    public List<KRS> getKrs() {
        return krs;
    }

    public void setKrs(List<KRS> krs) {
        this.krs = krs;
    }
}
