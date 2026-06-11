import {worker} from 'bullmq'
import {connection} from './queue.js'

const worker = new Worker(
    "emails", 
  async (Job) =>{  
    console.log("Processing email job...", Job.id, Job.name, Job.data)
    (await new Promise((resolve) => setTimeout(resolve, 1500)),
    console.log("Email job completed", Job.id, Job.name, Job.data));
    } ,
    { connection }
)

worker.on ("completed", (job)=>{
    console.log("job completed", job.id, job.name, job.data);
})

worker.on ("failed", (job,err)=>{
    console.log("job failed", job.id, job.name, job.data);
})
