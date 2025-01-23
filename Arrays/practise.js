setEditBesRequestData: (state, action) => {
    
        const aeJob = action.payload.aeJob,
        const planName = action.payload.planName,
        const pssInformation = action.payload.pssInformation,
        const status = action.payload.status,
        const dateCreated = action.payload.dateCreated,
        const invoice = action.payload.invoice,
        const comments = action.payload.comments,
        const fileUploads = action.payload.fileUploads,
        const jobId = action.payload.jobId,
        const customerId = action.payload.customerId,
        const zipcode = action.payload.zipcode,
        const jobSquareFeet = action.payload.jobSquareFeet,
        const dateOfSLA = action.payload.dateOfSLA,

     
   
    const besRequestFormData = {...state.besRequestFormData}
  
    besRequestFormData.aeJobName = aeJob
    besRequestFormData.planName = planName
    besRequestFormData.pss.firstName = pssInformation?.firstName
    besRequestFormData.pss.lastName = pssInformation?.lastName
    besRequestFormData.status = status
    besRequestFormData.zipcode = zipcode
    besRequestFormData.city = action.payload.city
    besRequestFormData.state = action.payload.state
    besRequestFormData.jobSquareFeet = jobSquareFeet
    besRequestFormData.dateOfSLA = dateOfSLA
    besRequestFormData.dateOfCreation = dateCreated
    besRequestFormData.invoice.invoiceNumber = invoice?.invoiceNumber
    besRequestFormData.invoice.dateOfOrder = invoice?.dateOrdered
    besRequestFormData.invoice.dateOfPurchase = invoice?.datePurchased
    besRequestFormData.comment = comments || []
    besRequestFormData.additionalForms = fileUploads
    besRequestFormData.fileUploads = fileUploads
    besRequestFormData.jobId = jobId || ''
    besRequestFormData.customerId = customerId || ''
    state.besRequestFormData = {...besRequestFormData}
},

