package co.com.sofka.okr.c2.model.okrs.values;

public class HistoricalProgress {

    private final String date;
    private final Double progress;

    public HistoricalProgress(String date, Double progress) {
        this.date = date;
        this.progress = progress;
    }

    public String getDate() {
        return date;
    }

    public Double getProgress() {
        return progress;
    }

    public static HistoricalProgress of(String date, Double progress){
        return new HistoricalProgress(date,progress);
    }
}
