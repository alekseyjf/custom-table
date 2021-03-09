import Services from "./Services";

const services = new Services();

export default {
    getInstance() {
        return services;
    }
}
