const acronyms = {
    "AGO": "Attorney General’s Office",
    "APA": "Asset Protection Agency",
    "BIS": "Department for Business, Innovation and Skills",
    "BEIS": "Department for Business, Energy and Industrial Strategy",
    "CO": "Cabinet Office",
    "CxD": "Chancellor's Departments (APA, DMO, GAD, HMRC, HMT, NS&I, OBR)",
    "DCLG": "Department for Communities and Local Government",
    "DCMS": "Department for Digital, Culture, Media and Sport",
    "DECC": "Department of Energy and Climate Change",
    "Defra": "Department for Environment, Food and Rural Affairs",
    "DE&S": "Defence Equipment and Support (part of MoD)",
    "DExEU": "Department for Exiting the European Union",
    "DfE": "Department for Education",
    "DfID": "Department for International Development",
    "DfT": "Department for Transport",
    "DH": "Department of Health",
    "DHSC": "Department of Health and Social Care",
    "DMO": "Debt Management Office",
    "DPM": "Deputy Prime Minister",
    "DVLA": "Driver and Vehicle Licensing Agency (part of DfT)",
    "DWP": "Department for Work and Pensions",
    "ERG": "Efficiency and Reform Group (part of CO)",
    "FCO": "Foreign and Commonwealth Office",
    "GAD": "Government Actuary’s Department",
    "GDS": "Government Digital Service",
    "HCS": "Home Civil Service (all civil servants in UK, Scottish and Welsh governments)",
    "HMRC": "Her Majesty’s Revenue and Customs",
    "HMT": "Her Majesty’s Treasury",
    "HO": "Home Office",
    "HofC": "House of Commons",
    "HofL": "House of Lords",
    "IPA": "Infrastructure and Projects Authority",
    "Law": "Law officers (AGO, Office of the Advocate General for Scotland)",
    "MHCLG": "Ministry of Housing, Communities and Local Government",
    "MoD": "Ministry of Defence",
    "MoJ": "Ministry of Justice",
    "MPA": "Major Projects Authority (part of CO)",
    "NAO": "National Audit Office",
    "NHS": "National Health Service",
    "NICS": "Northern Ireland Civil Service",
    "NIO": "Northern Ireland Office",
    "NS&I": "National Savings and Investments",
    "OBR": "Office for Budget Responsibility",
    "ONS": "Office for National Statistics",
    "PM": "Prime Minister",
    "Scot": "Scotland Office",
    "SG": "Scottish Government",
    "Wal": "Wales Office",
    "WG": "Welsh Government"
};

function formatAcronym(acronym) {
    return acronym.trim().toLowerCase();
}

function searchAcronym(event) {
    event.preventDefault();
    const searchBox = document.getElementById('searchBox');
    const result = document.getElementById('result');
    const searchTerm = formatAcronym(searchBox.value);
    
    if (searchTerm === "") {
        result.textContent = "Please enter an acronym.";
        return; 
    }
    const matches = Object.keys(acronyms).filter(key => formatAcronym(key).includes(searchTerm));

    if (matches.length > 0) {
        result.innerHTML = matches.map(match => `<p>${match}: ${acronyms[match]}</p>`).join('');
    } else {
        result.textContent = "No such acronym exists.";
    }

    document.getElementById('searchForm').reset();
}

document.getElementById('searchForm').addEventListener('submit', searchAcronym);