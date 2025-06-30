

const dummyData = [
  // { 
  //   srNo: 1, 
  //   companyName: "Alpha Corp", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Alpha Corp (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Alpha Corp (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 2, 
  //   companyName: "Beta LLC", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Beta LLC (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Beta LLC (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 3, 
  //   companyName: "Gamma Inc", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Gamma Inc (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Gamma Inc (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 4, 
  //   companyName: "Delta Solutions", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Delta Solutions (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Delta Solutions (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 5, 
  //   companyName: "Epsilon Enterprises", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Epsilon Enterprises (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Epsilon Enterprises (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 6, 
  //   companyName: "Omega Group", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Omega Group (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Omega Group (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 7, 
  //   companyName: "Phoenix Co.", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Phoenix Co. (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Phoenix Co. (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 8, 
  //   companyName: "Titan Industries", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Titan Industries (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Titan Industries (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 9, 
  //   companyName: "Aurora Systems", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Aurora Systems (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Aurora Systems (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 10, 
  //   companyName: "Nebula Innovations", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Nebula Innovations (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Nebula Innovations (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 11, 
  //   companyName: "Orion Solutions", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Orion Solutions (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Orion Solutions (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 12, 
  //   companyName: "Zenith Corp", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Zenith Corp (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Zenith Corp (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 13, 
  //   companyName: "Apex Dynamics", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Apex Dynamics (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Apex Dynamics (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 14, 
  //   companyName: "Quantum Labs", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Quantum Labs (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Quantum Labs (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 15, 
  //   companyName: "Fusion Tech", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Fusion Tech (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Fusion Tech (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 16, 
  //   companyName: "Vortex Ventures", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Vortex Ventures (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Vortex Ventures (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 17, 
  //   companyName: "Cosmic Creations", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Cosmic Creations (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Cosmic Creations (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 18, 
  //   companyName: "Starlight Corp", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Starlight Corp (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Starlight Corp (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 19, 
  //   companyName: "Moonstone LLC", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Moonstone LLC (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Moonstone LLC (ID: ${id})`), color: 'error' }
  //   ] 
  // },
  // { 
  //   srNo: 20, 
  //   companyName: "Sunbeam Enterprises", 
  //   actions: [
  //     { label: "Edit", handler: (id) => console.log(`Editing Sunbeam Enterprises (ID: ${id})`), color: 'primary' }, 
  //     { label: "Delete", handler: (id) => console.log(`Deleting Sunbeam Enterprises (ID: ${id})`), color: 'error' }
  //   ] 
  // },
];


export default dummyData;