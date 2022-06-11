import axios from "axios";

const URL = 'http://localhost:3001'

const TaskAPI = {
    createTask: (params) => {
        const url = URL + '/api/task/create';
        return axios.post(url, params)
    },
    getTask: () => {
        const url = URL + '/api/task/get';
        return axios.get(url)
    },
    editTask: (params) => {
        const url = URL + '/api/task/edit';
        return axios.patch(url, params)
    },
    doneTask: (params) => {
        const url = URL + '/api/task/done';
        return axios.patch(url, params)
    },
    notdoneTask: (params) => {
        const url = URL + '/api/task/notdone';
        return axios.patch(url, params)
    },
    doneAllTask: (params) => {
        const url = URL + '/api/task/doneAll';
        return axios.patch(url, params)
    },
    notdoneAllTask: (params) => {
        const url = URL + '/api/task/notdoneAll';
        return axios.patch(url, params)
    },
    deleteTask: (params) => {
        const url = URL + '/api/task/delete';
        return axios.patch(url, params)
    },
    deleteAllTask: (params) => {
        const url = URL + '/api/task/deleteAll';
        return axios.patch(url, params)
    }
}

export default TaskAPI;