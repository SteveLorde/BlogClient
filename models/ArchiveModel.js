export class ArchiveModel {

    async GetData() {
        const data = await axios.get(`${}/archive/getall`).then(res => res.data)
    }

    UpdateView() {

    }
}