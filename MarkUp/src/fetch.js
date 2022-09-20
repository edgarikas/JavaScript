/*
let checkMe = obj.some((check) => {
  if (check.name === "Edgar" && check.vip) {
    return check.name;
  }
});


result.some((res, i) => {
  console.log(i);
  return res[i].name === "Edgar Martynenko" && res.vip;
});
*/

/*
fetch("https://academy-year-2021.herokuapp.com/week-3/party")
  .then((response) => response.json())
  .then((result, i) => console.log(JSON.stringify(result[i].name)))
  .catch((error) => console.log(error));
*/
document.querySelector(".g").addEventListener("click", () => {
  console.log("Loading..");
  fetch("https://academy-year-2021.herokuapp.com/week-3/party")
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
});

document.querySelector(".f").addEventListener("click", () => {
  fetch("https://academy-year-2021.herokuapp.com/week-3/party")
    .then((response) => response.json())
    .then((result) => {
      let myName = result.filter((f) => {
        return f.name === "Edgar" && f.vip;
      });
      if (myName) {
        console.log(
          `Rastas ->  ${myName[0].name}`,
          `Vip Status: ${myName[0].vip}`
        );
      } else console.log("Nerastas :/");
    })
    .catch((error) => console.log(error));
});

document.querySelector(".c").addEventListener("click", () => {
  fetch("https://academy-year-2021.herokuapp.com/week-3/wedding")
    .then((response) => response.json())
    .then((result) => {
      let checkAttendingP = result.filter((f) => {
        return f.attending;
      });
      let atteindingIsPlusOne = checkAttendingP.filter((f) => {
        return f.plusOne;
      });
      console.log(atteindingIsPlusOne);
    })
    .catch((error) => console.log(error));
});

document.querySelector(".t").addEventListener("click", () => {
  fetch("https://academy-year-2021.herokuapp.com/week-3/wedding")
    .then((response) => response.json())
    .then((result) => {
      let atLeastOneIsAttending = result.some((check) => {
        return check.attending;
      });

      if (atLeastOneIsAttending) {
        console.log("Yra dalyvaujantis");
      } else console.log("Nera dalyvaujanciu");
    })
    .catch((error) => console.log(error));
});

let array = [
  {
    name: "Roslyn Wuckert",
    id: "8fde891a-6919-4517-b41e-c47593b197ec",
    plusOne: true,
    attending: true,
  },
  {
    name: "Stephan Cartwright",
    id: "0e71a278-ea5d-44a2-b324-b0232c5cda7b",
    plusOne: false,
    attending: true,
  },
  {
    name: "Werner Kuvalis",
    id: "f13e730c-358b-4a2d-a6a2-436c0cf57f75",
    plusOne: false,
    attending: true,
  },
  {
    name: "Maxine McClure",
    id: "fe32b4b0-0e43-4272-b648-8202a4b8bfd4",
    plusOne: true,
    attending: true,
  },
  {
    name: "Esmeralda Konopelski",
    id: "214898b1-34cd-45f8-88a8-fbf29e2c5d3d",
    plusOne: true,
    attending: false,
  },
  {
    name: "Maverick Witting",
    id: "b0554a7c-cf46-4c7f-84d1-42639c7d5861",
    plusOne: true,
    attending: true,
  },
  {
    name: "Edmond Pfannerstill",
    id: "42e19d1a-b784-484b-858e-1a5466d237f7",
    plusOne: true,
    attending: false,
  },
  {
    name: "Earnest Erdman",
    id: "b4b2ab83-a5c9-4189-b74f-0620e29aa3dc",
    plusOne: true,
    attending: true,
  },
  {
    name: "Fabiola Yost",
    id: "9fe0e180-0851-4784-8336-39043dfdee84",
    plusOne: false,
    attending: false,
  },
  {
    name: "Olga Reichert",
    id: "f02819af-e80e-44d9-9f76-36bdbff938af",
    plusOne: true,
    attending: false,
  },
  {
    name: "Gabrielė",
    id: "e9105fe4-399f-4b4d-aecb-e0141f1087a2",
    plusOne: true,
    attending: true,
  },
  {
    name: "Frank Mueller",
    id: "fee20999-ed74-4492-942d-8bfd613e827f",
    plusOne: true,
    attending: true,
  },
  {
    name: "Olaf Botsford",
    id: "4c09fa71-41e8-4cb0-80b6-c2345a5d5a37",
    plusOne: false,
    attending: true,
  },
  {
    name: "Lola Bernier",
    id: "ac4315f3-6ab4-4443-ba57-16155ef1abd7",
    plusOne: true,
    attending: false,
  },
  {
    name: "Suzanne Hane",
    id: "bed10cc5-eeee-4d14-b405-73dd39a0db0e",
    plusOne: true,
    attending: true,
  },
  {
    name: "Furman O'Keefe",
    id: "9fbcfc8a-ff92-4fad-b056-2fe0b9cf68a7",
    plusOne: true,
    attending: false,
  },
  {
    name: "Abagail Balistreri",
    id: "f4aa2ace-8cd5-4aca-9e80-ab14e6660c62",
    plusOne: true,
    attending: false,
  },
  {
    name: "Ernestine McCullough",
    id: "887194a4-1973-4dae-a13e-3a6c8374371e",
    plusOne: false,
    attending: true,
  },
  {
    name: "Emmet Wyman",
    id: "7bd82e61-310c-4313-997b-0ce4130fc944",
    plusOne: false,
    attending: false,
  },
  {
    name: "Evie Dickinson",
    id: "b04cc450-16ec-4780-88c0-a83c8803db8b",
    plusOne: false,
    attending: true,
  },
  {
    name: "Laima",
    id: "054c096a-6aa7-488b-b06b-e831b8187e41",
    plusOne: true,
    attending: true,
  },
  {
    name: "Omer Kirlin",
    id: "3c40d39b-40ef-488c-9838-32fb5ec0545d",
    plusOne: true,
    attending: true,
  },
  {
    name: "Ignacio Runolfsdottir",
    id: "30d9b849-511a-441c-a879-b3f55a2b516f",
    plusOne: true,
    attending: true,
  },
  {
    name: "Laron Walter",
    id: "721b266c-1492-429a-b84d-bc41387c4481",
    plusOne: false,
    attending: true,
  },
  {
    name: "Raphaelle Maggio",
    id: "6e5ac381-d40b-42a1-ace1-513f7d609817",
    plusOne: true,
    attending: false,
  },
  {
    name: "Justice Heaney",
    id: "b787739e-84e4-4d8e-a75e-2dc6a3937031",
    plusOne: true,
    attending: false,
  },
  {
    name: "Nellie Upton",
    id: "b7489d4b-4dc6-4179-9029-99434ccb2e01",
    plusOne: false,
    attending: true,
  },
  {
    name: "Lucio Stanton",
    id: "bd19d609-8462-45df-8f50-c4e4a1164e1d",
    plusOne: true,
    attending: true,
  },
  {
    name: "Jerald Shields",
    id: "59778aa9-2888-446e-a80e-dfdadd3c5917",
    plusOne: false,
    attending: true,
  },
  {
    name: "Reanna Collier",
    id: "b57289af-9f64-445a-b671-95258b288814",
    plusOne: false,
    attending: false,
  },
  {
    name: "Edgar",
    id: "f71270a5-0fb4-402d-9f41-4442dfd5396f",
    plusOne: true,
    attending: true,
  },
  {
    name: "Esta Weissnat",
    id: "3c7a6f4a-05db-4828-9151-84cf4c2021f2",
    plusOne: true,
    attending: true,
  },
  {
    name: "Nichole Wisozk",
    id: "197f058b-e521-48c0-a360-748a5f169d7f",
    plusOne: true,
    attending: false,
  },
  {
    name: "Orie Heathcote",
    id: "80deb348-2ab3-4234-96ad-a8e644ed5f33",
    plusOne: true,
    attending: false,
  },
  {
    name: "Alexys Hilpert",
    id: "96be4053-735d-41aa-83e2-2031a9f3518b",
    plusOne: true,
    attending: true,
  },
  {
    name: "Maude Schiller",
    id: "685a85aa-c953-4476-a1af-090d5c49dd1f",
    plusOne: false,
    attending: false,
  },
  {
    name: "Raegan Jerde",
    id: "03295909-5c76-45a4-8f26-02a9b5087ebc",
    plusOne: false,
    attending: true,
  },
  {
    name: "Brant Kessler",
    id: "ab77aedf-c016-414f-a05a-6d66357eddad",
    plusOne: true,
    attending: true,
  },
  {
    name: "Daphney Simonis",
    id: "a34ae867-9070-4033-bcff-b542ea76959e",
    plusOne: true,
    attending: false,
  },
  {
    name: "Gwendolyn Stracke",
    id: "afd5ceb3-d4a5-4ca1-ba74-37c5221c9dfe",
    plusOne: true,
    attending: true,
  },
  {
    name: "Monika",
    id: "526867b0-a30c-4e64-9148-5ede68d7f2ac",
    plusOne: true,
    attending: true,
  },
  {
    name: "Keven Larkin",
    id: "40a0a341-b722-494e-a1a9-a17b18356214",
    plusOne: true,
    attending: true,
  },
  {
    name: "Clementina Lynch",
    id: "c9dcef15-aeb5-40b5-8e6c-205dc5d2c156",
    plusOne: true,
    attending: false,
  },
  {
    name: "Meaghan Schultz",
    id: "0b6c3220-0e84-4915-abcd-c81844398f35",
    plusOne: true,
    attending: false,
  },
  {
    name: "Katrina Morar",
    id: "3e0a751e-2741-4313-9d7e-b241cd237f05",
    plusOne: false,
    attending: false,
  },
  {
    name: "Giovanni Orn",
    id: "93458c62-f082-474b-8074-f58c71aaddea",
    plusOne: true,
    attending: true,
  },
  {
    name: "Kenton Veum",
    id: "d6ebc599-a868-40f4-ad86-f96f195ba97c",
    plusOne: true,
    attending: false,
  },
  {
    name: "Clark Hegmann",
    id: "ad634ef1-ec95-4e67-b30c-1e51c52e002a",
    plusOne: false,
    attending: false,
  },
  {
    name: "Ima Schimmel",
    id: "ed533bd0-0723-4a9a-bd1d-f39007bc328e",
    plusOne: false,
    attending: false,
  },
  {
    name: "Waino Hamill",
    id: "df312ba4-d81c-42ff-a14e-73de77209146",
    plusOne: true,
    attending: false,
  },
  {
    name: "Mindaugas",
    id: "b62e900d-a339-4b4e-a3ba-4a84ee67c319",
    plusOne: true,
    attending: true,
  },
  {
    name: "Lucas MacGyver",
    id: "b38d8bc0-9d05-4d8e-9786-4c8038584b31",
    plusOne: false,
    attending: false,
  },
  {
    name: "Denis Donnelly",
    id: "3df7f9af-8836-4027-ac34-ae412bb9cfba",
    plusOne: false,
    attending: false,
  },
  {
    name: "Rowland Barton",
    id: "b11c0554-17c2-4c7f-9da3-27952d882327",
    plusOne: true,
    attending: true,
  },
  {
    name: "Maximillia McGlynn",
    id: "01b56dd9-d874-4495-aaa3-f3fc61e9d030",
    plusOne: false,
    attending: false,
  },
  {
    name: "Blair Feest",
    id: "ba49b226-8221-45e7-8417-74f40f0170d7",
    plusOne: false,
    attending: false,
  },
  {
    name: "Darrel Greenholt",
    id: "6711c3aa-e72f-44e5-a1f6-f54f3fc636cd",
    plusOne: false,
    attending: true,
  },
  {
    name: "Wilfred O'Connell",
    id: "937cc0d4-8d57-4b06-9a8b-d2bb1683d934",
    plusOne: false,
    attending: true,
  },
  {
    name: "Deon Robel",
    id: "50666f56-62f6-45fc-88e6-3f76eeb4455f",
    plusOne: false,
    attending: false,
  },
  {
    name: "Lea Bauch",
    id: "e2d04dd2-0024-4b9b-b38d-310d8d7a7cda",
    plusOne: false,
    attending: false,
  },
  {
    name: "Urtė",
    id: "29f60f7f-a0b1-4337-9826-bfcc29c72653",
    plusOne: true,
    attending: true,
  },
  {
    name: "Willow Pacocha",
    id: "0dc17549-6a3d-420e-9d29-4b64f10a9542",
    plusOne: false,
    attending: true,
  },
  {
    name: "Mae Koelpin",
    id: "129a3fc6-8b8a-4f6d-bac3-62ae936d7a87",
    plusOne: false,
    attending: false,
  },
  {
    name: "Buddy Erdman",
    id: "3bab16ae-1c4b-434b-9b89-d26ec76a2f3b",
    plusOne: true,
    attending: false,
  },
  {
    name: "Garland Daniel",
    id: "1cdd9fa8-90da-44b6-8c7d-6d859d259d2f",
    plusOne: true,
    attending: true,
  },
  {
    name: "Gregory Nicolas",
    id: "a37c9e5d-3466-486d-9e44-1a5d0e2edf32",
    plusOne: true,
    attending: false,
  },
  {
    name: "Jeffry Adams",
    id: "6ce1244d-5871-422f-a1ed-64a8bba478c0",
    plusOne: true,
    attending: true,
  },
  {
    name: "Thad Altenwerth",
    id: "ddc3d895-9f0e-4e83-bd37-dae5db37e42e",
    plusOne: false,
    attending: true,
  },
  {
    name: "Neva Leannon",
    id: "6f3b04c6-7c83-4f9a-9710-27c465fe0d25",
    plusOne: true,
    attending: true,
  },
  {
    name: "Mavis Senger",
    id: "ce1ee145-dbe7-4f5f-b3bb-086d46eea87f",
    plusOne: false,
    attending: true,
  },
  {
    name: "Denas",
    id: "e318d629-80aa-47a5-9713-cc758f3716c1",
    plusOne: true,
    attending: true,
  },
  {
    name: "Jarrett Hane",
    id: "51a1ed1e-7336-440a-b2ed-0ba72180e786",
    plusOne: false,
    attending: false,
  },
  {
    name: "Mossie Parker",
    id: "bb84b9f3-3c52-43d5-bb3e-c696396aa581",
    plusOne: true,
    attending: true,
  },
  {
    name: "Guiseppe Leffler",
    id: "85dffc39-87bf-43d1-a397-32b417a9bd11",
    plusOne: true,
    attending: true,
  },
  {
    name: "Emilio Daniel",
    id: "00300eb5-8017-404e-99b6-e8cc93b84a84",
    plusOne: true,
    attending: true,
  },
  {
    name: "Mohammed O'Hara",
    id: "e313b313-afd7-4689-a4c3-c28a14dab744",
    plusOne: false,
    attending: false,
  },
  {
    name: "Alvena Fay",
    id: "a3ea271d-7672-40d3-b436-54b217d25b84",
    plusOne: false,
    attending: false,
  },
  {
    name: "Luigi Corkery",
    id: "9328516c-3ad2-4276-830e-639ce4f67e08",
    plusOne: false,
    attending: true,
  },
  {
    name: "Frederik Schaefer",
    id: "afc4516e-5351-4ae3-9501-97201c55084f",
    plusOne: false,
    attending: true,
  },
  {
    name: "Ebba Wiza",
    id: "c24cda8c-8542-4a74-9429-43b14e89a10e",
    plusOne: true,
    attending: false,
  },
  {
    name: "Rolandas",
    id: "793fe746-56b7-4d15-b2c9-a292e4355f2a",
    plusOne: true,
    attending: true,
  },
  {
    name: "Robyn Lang",
    id: "5ea83dc9-bc00-4a74-961c-2d79b5f7672e",
    plusOne: true,
    attending: false,
  },
  {
    name: "Lukas Kessler",
    id: "d2661074-ab9b-4d94-9207-83b37041b5ae",
    plusOne: false,
    attending: true,
  },
  {
    name: "Domenica Bruen",
    id: "2906ac14-6a1d-4d91-a32a-3cfe46add2c7",
    plusOne: true,
    attending: true,
  },
  {
    name: "Mallory Runolfsson",
    id: "4b2c12b2-61f6-409b-92c8-667a80bc6dbf",
    plusOne: false,
    attending: true,
  },
  {
    name: "Cortney Upton",
    id: "1667b1ff-a662-4443-ba7f-8da945c277b3",
    plusOne: false,
    attending: false,
  },
  {
    name: "Josephine Brown",
    id: "cdb9ca4c-3f9c-4d57-b651-d8c45e6fa54a",
    plusOne: false,
    attending: true,
  },
  {
    name: "Wilburn Sawayn",
    id: "bb170739-4d70-4899-97a5-04275876e3c1",
    plusOne: true,
    attending: false,
  },
  {
    name: "Anjali Jacobs",
    id: "8298f0ca-a761-4020-a4d1-81b3ad8b75f4",
    plusOne: false,
    attending: true,
  },
  {
    name: "Glen Weissnat",
    id: "5d1d5a52-3849-4d8d-9db6-8313db9cc78c",
    plusOne: true,
    attending: false,
  },
  {
    name: "Donatas",
    id: "be15f6c4-bbde-4dfa-973d-782b73cc709c",
    plusOne: true,
    attending: true,
  },
  {
    name: "Camryn Grady",
    id: "96230914-a2a3-495d-a2b3-5013914cbf27",
    plusOne: false,
    attending: true,
  },
  {
    name: "Brianne Morissette",
    id: "63cc60be-8cf3-46c3-a211-2c1659b82bda",
    plusOne: true,
    attending: true,
  },
  {
    name: "Forest Runolfsdottir",
    id: "4cf4c2af-fa7a-4cbc-9c15-5d981879fb04",
    plusOne: false,
    attending: false,
  },
  {
    name: "Patsy Russel",
    id: "600bf386-5ac8-4ed0-ac02-0b327b412730",
    plusOne: false,
    attending: false,
  },
  {
    name: "Julien Stiedemann",
    id: "399096fe-8e5e-4ac1-97ac-101eac67c973",
    plusOne: false,
    attending: true,
  },
  {
    name: "Torrance Bergstrom",
    id: "5b50988a-bbbb-4fb3-aedd-816ba3a4ea2d",
    plusOne: false,
    attending: false,
  },
  {
    name: "Helene Cummerata",
    id: "7075db92-03df-4d59-af6c-027f93aa3430",
    plusOne: true,
    attending: false,
  },
  {
    name: "Giovanna Deckow",
    id: "7f89d5c9-d7b5-426f-b0c4-273de603c0c5",
    plusOne: true,
    attending: true,
  },
  {
    name: "Reggie Marquardt",
    id: "c02f7825-a1e2-4dff-9303-6f0c47da2502",
    plusOne: true,
    attending: false,
  },
  {
    name: "Arnas",
    id: "e0162b17-4e41-430c-993d-beca6d7e8fb8",
    plusOne: true,
    attending: true,
  },
  {
    name: "Christelle Kautzer",
    id: "b14c9fa0-fff4-4466-8487-68a90f1a9edb",
    plusOne: false,
    attending: false,
  },
  {
    name: "Duncan Sporer",
    id: "ff68e061-e01d-4e8e-8e85-7490d993e093",
    plusOne: false,
    attending: false,
  },
  {
    name: "Bonita Legros",
    id: "3dca8e1b-a0e9-4147-976d-05b8c5942b23",
    plusOne: true,
    attending: true,
  },
  {
    name: "Wilton Bogan",
    id: "ca9ba8bd-baf6-4cbe-8a29-6d9870c6b5a6",
    plusOne: true,
    attending: true,
  },
  {
    name: "Jerome Jaskolski",
    id: "451e2e73-ef41-4f1c-8254-5860b761eadb",
    plusOne: false,
    attending: true,
  },
  {
    name: "Merlin Bernhard",
    id: "59f961bd-b996-4fdd-95b4-23b0d8ecba61",
    plusOne: true,
    attending: false,
  },
  {
    name: "Brisa Fritsch",
    id: "c78a72c2-0b11-424f-b399-5b1b114a8c28",
    plusOne: false,
    attending: false,
  },
  {
    name: "Polly Mante",
    id: "5693fe71-e536-4ba5-92d9-1a82a5ffdfe8",
    plusOne: true,
    attending: true,
  },
  {
    name: "Everett Baumbach",
    id: "bf8c1cd0-7248-419e-848c-cecf17702734",
    plusOne: false,
    attending: true,
  },
  {
    name: "Aretas",
    id: "2965655e-5ea6-47a4-84a4-9e9dcbbeeabd",
    plusOne: true,
    attending: true,
  },
  {
    name: "Arden Fadel",
    id: "ae9dc168-696f-4c4b-a07a-741efb3eb19d",
    plusOne: true,
    attending: false,
  },
  {
    name: "Jordy Glover",
    id: "6ea72811-bf6b-4986-b205-6f4a2bab9c51",
    plusOne: false,
    attending: false,
  },
  {
    name: "Ila Schroeder",
    id: "d1399353-2103-49fb-b5b5-aada977c2518",
    plusOne: true,
    attending: false,
  },
  {
    name: "Margot Nader",
    id: "6536152b-5ff6-4c6d-981f-17e8001dd19d",
    plusOne: true,
    attending: true,
  },
  {
    name: "Shayne Aufderhar",
    id: "6882132f-3bff-42b7-8345-81aa9d30e891",
    plusOne: false,
    attending: false,
  },
  {
    name: "Chet Swift",
    id: "609ba214-47dc-4b76-800c-d0a040a116ec",
    plusOne: true,
    attending: false,
  },
  {
    name: "Keagan Purdy",
    id: "19f2492f-7be6-4304-9883-328babc61f5b",
    plusOne: true,
    attending: false,
  },
  {
    name: "Syble Rohan",
    id: "197493fc-0a84-473d-a82f-968f9ca1ffed",
    plusOne: true,
    attending: true,
  },
  {
    name: "Cleo Bashirian",
    id: "dffa49fe-d9ed-4ae1-8e73-bba42e9e8495",
    plusOne: true,
    attending: false,
  },
  {
    name: "Dainius",
    id: "61000312-1865-43cf-a5c9-f290a007664c",
    plusOne: true,
    attending: true,
  },
  {
    name: "Lawson O'Keefe",
    id: "54e480eb-6244-4ef5-8611-8a4a2a57df72",
    plusOne: true,
    attending: false,
  },
  {
    name: "Samanta Abernathy",
    id: "b9c633d1-9858-430f-84a7-9f1d79c0a9fc",
    plusOne: false,
    attending: true,
  },
  {
    name: "Eliseo Johnston",
    id: "72514381-235c-4b79-8f09-a1f221ce5050",
    plusOne: true,
    attending: true,
  },
  {
    name: "Esteban Greenfelder",
    id: "3f0815ad-2b66-4980-b3b1-0664b875f174",
    plusOne: true,
    attending: true,
  },
  {
    name: "Tara Ledner",
    id: "2b5c385d-f35a-43e0-9b9b-50375b5c10f2",
    plusOne: true,
    attending: false,
  },
  {
    name: "Giovanny Braun",
    id: "0ffe2c71-28ec-4a1a-bdcb-5afff2ee044d",
    plusOne: false,
    attending: false,
  },
  {
    name: "Christa Pacocha",
    id: "e92eb846-193d-4a7a-8f71-70c78abff6fc",
    plusOne: false,
    attending: true,
  },
  {
    name: "Kody Gutmann",
    id: "d4d00f03-b986-4428-a365-59f0e9b347ca",
    plusOne: true,
    attending: false,
  },
  {
    name: "Jerrod Sanford",
    id: "9437f7b9-c154-4f92-b978-ae6e31a8b55e",
    plusOne: true,
    attending: false,
  },
  {
    name: "Emilija",
    id: "7bd10427-5fbf-4c73-9c92-4bc4de2d033d",
    plusOne: true,
    attending: true,
  },
  {
    name: "Nathan Jaskolski",
    id: "21672da5-96f8-4bc9-9024-422a9773b459",
    plusOne: false,
    attending: false,
  },
  {
    name: "Humberto O'Conner",
    id: "0f97bdb8-ce80-436c-b6aa-a2b24f68dcfd",
    plusOne: true,
    attending: false,
  },
  {
    name: "Katarina Trantow",
    id: "222c7c08-4c39-4494-992d-e777552d639b",
    plusOne: false,
    attending: false,
  },
  {
    name: "Judy Fadel",
    id: "408b09c5-1ee4-4912-adb3-c33f801fe520",
    plusOne: true,
    attending: false,
  },
  {
    name: "Leanna Hane",
    id: "90b457ce-d1cf-44d2-8fe5-d1b9997549c4",
    plusOne: true,
    attending: true,
  },
  {
    name: "Kelli Crooks",
    id: "7b41d8b9-24dc-47b9-aacf-4fba67a849b3",
    plusOne: true,
    attending: false,
  },
  {
    name: "Ardella Kreiger",
    id: "0c8872a2-c476-42a6-a4b7-f5c3cb97e737",
    plusOne: true,
    attending: true,
  },
  {
    name: "Madie Cassin",
    id: "ab914984-cfe0-4775-aa12-1201e887d3e7",
    plusOne: true,
    attending: true,
  },
  {
    name: "Herbert Tillman",
    id: "35b1a622-792b-4a7e-87a6-07f9af92e4c1",
    plusOne: false,
    attending: true,
  },
  {
    name: "Karina",
    id: "96d7424d-2680-4a00-90b2-aab194586b8a",
    plusOne: true,
    attending: true,
  },
  {
    name: "Isai Marvin",
    id: "0a167a04-30e2-43c6-89f1-199704067d9e",
    plusOne: false,
    attending: false,
  },
  {
    name: "Tobin Kozey",
    id: "e2ec7ee1-0c4d-4fe3-af9d-b2e6889df966",
    plusOne: true,
    attending: true,
  },
  {
    name: "Durward Champlin",
    id: "cc4cc12e-404d-4009-bce5-1ecc0fe868fd",
    plusOne: false,
    attending: false,
  },
  {
    name: "Davonte Lesch",
    id: "eb1b81fd-701c-4dfd-8996-67a96ebcd546",
    plusOne: true,
    attending: false,
  },
  {
    name: "Marta Haley",
    id: "15d032de-d8ea-4444-97af-6d67291cc375",
    plusOne: false,
    attending: false,
  },
  {
    name: "Gilda Mann",
    id: "306bdcfd-9063-4f13-b688-615ca4009332",
    plusOne: false,
    attending: false,
  },
  {
    name: "Pete Kihn",
    id: "f43ba394-e618-42ea-a430-fe4b67c46695",
    plusOne: false,
    attending: true,
  },
  {
    name: "Ernie Raynor",
    id: "d9d1e566-ac92-4dc4-8adb-8b5cdafa582a",
    plusOne: true,
    attending: false,
  },
  {
    name: "Marquise Shields",
    id: "566ea565-7758-4dbc-824a-5e06b3bf674d",
    plusOne: false,
    attending: false,
  },
  {
    name: "Karolis",
    id: "856992e6-3e32-489e-8f9c-61d15df7135a",
    plusOne: true,
    attending: true,
  },
  {
    name: "Evans Kris",
    id: "e499c8ad-8801-4413-a465-d4a95419e611",
    plusOne: false,
    attending: true,
  },
  {
    name: "Frank Hodkiewicz",
    id: "b52165c6-a9db-4470-9776-2818354c64c8",
    plusOne: false,
    attending: false,
  },
  {
    name: "Maybelle Leffler",
    id: "9edceb85-f345-4cac-8449-97da55a9f937",
    plusOne: false,
    attending: false,
  },
  {
    name: "Marjory Ferry",
    id: "dd5a5f43-c97a-42cc-a886-c6d7c528fcaf",
    plusOne: true,
    attending: true,
  },
  {
    name: "Rhea Schinner",
    id: "905809ff-3d2a-4b00-8cca-dc402b9696f9",
    plusOne: true,
    attending: true,
  },
  {
    name: "Yolanda Jacobi",
    id: "e81ed8cf-b0b6-4f57-99e7-1e64056067eb",
    plusOne: false,
    attending: true,
  },
  {
    name: "Clarabelle Hills",
    id: "82399a74-e087-4b54-ad86-2fa4aecc9e59",
    plusOne: false,
    attending: true,
  },
  {
    name: "Rose Rath",
    id: "3dd12a93-8cfa-498a-9a9e-09a37e0e9994",
    plusOne: false,
    attending: false,
  },
  {
    name: "Lucile Walter",
    id: "d0fffc95-a3b0-4a9e-b0d6-7ed327f368b9",
    plusOne: false,
    attending: true,
  },
  {
    name: "Kristoferis",
    id: "86f641b7-acf7-4644-8714-11d577463936",
    plusOne: true,
    attending: true,
  },
  {
    name: "Bert Rodriguez",
    id: "fdd5077d-59fe-4de8-95e8-5590fb2ab066",
    plusOne: false,
    attending: false,
  },
  {
    name: "Ruth Klocko",
    id: "69ee768c-73d0-4b29-a0ce-dea14a9763fa",
    plusOne: true,
    attending: false,
  },
  {
    name: "Jerrod Lebsack",
    id: "2d1d9b94-36d0-4599-a7b4-0eb6af7dc361",
    plusOne: true,
    attending: true,
  },
  {
    name: "Lorenza Lehner",
    id: "a0bec115-8bd2-4002-89da-1da9b50df767",
    plusOne: false,
    attending: false,
  },
  {
    name: "Jasmin Fahey",
    id: "ab519ba8-996a-4890-8d0a-4724b52e9fd5",
    plusOne: false,
    attending: false,
  },
  {
    name: "Allen Hills",
    id: "bbd3e328-ebe3-4e70-8366-cd4aec2c354c",
    plusOne: true,
    attending: false,
  },
  {
    name: "Darrion Hand",
    id: "a4469805-51b2-43dc-8ccb-1a7b86f9d1e1",
    plusOne: true,
    attending: true,
  },
  {
    name: "Donato Mueller",
    id: "276f1fef-6cf6-474e-8d0a-86d9833bfd78",
    plusOne: false,
    attending: false,
  },
  {
    name: "Jarrell O'Connell",
    id: "b63681c9-e609-40bd-b39c-5072d470203b",
    plusOne: false,
    attending: true,
  },
  {
    name: "Markas Martinas",
    id: "9f0fce38-0654-492a-bf25-a4b68ed0d0cd",
    plusOne: true,
    attending: true,
  },
  {
    name: "Gussie Wolff",
    id: "68662422-d57c-480c-afe3-fb44095a822d",
    plusOne: true,
    attending: false,
  },
  {
    name: "Wendell Weber",
    id: "3989da44-3a2f-49a6-93c5-7f861fa21afb",
    plusOne: false,
    attending: true,
  },
  {
    name: "Abdullah Brakus",
    id: "8182073b-c1b9-4d0c-9b27-c1a3cf4f35f5",
    plusOne: false,
    attending: true,
  },
  {
    name: "Elenora Nikolaus",
    id: "ef1f7df1-b2c1-4cd1-abfb-68a55c82b670",
    plusOne: false,
    attending: false,
  },
  {
    name: "Coy Cremin",
    id: "ff95fd33-aae8-47f6-8c21-88ead6757e58",
    plusOne: false,
    attending: false,
  },
  {
    name: "Elta Blick",
    id: "5fb5c302-aa08-48e5-b9ed-5da7bf08471d",
    plusOne: false,
    attending: true,
  },
  {
    name: "Harmon Hahn",
    id: "b81373c3-a8a4-4d42-9120-5816efc37358",
    plusOne: false,
    attending: false,
  },
  {
    name: "Keanu White",
    id: "ceed039a-2315-439e-a74f-c9a03905c0a2",
    plusOne: false,
    attending: false,
  },
  {
    name: "Claud Haley",
    id: "5d707401-1e86-42f2-8936-50a3e31a4dfd",
    plusOne: true,
    attending: false,
  },
  {
    name: "Matas",
    id: "80260087-66dc-4bca-98eb-7eca18407833",
    plusOne: true,
    attending: true,
  },
  {
    name: "Xander Hegmann",
    id: "25f44104-b381-42ce-b551-0902d04081ac",
    plusOne: false,
    attending: true,
  },
  {
    name: "Gillian Hoeger",
    id: "43be2bc0-b206-4c69-b35c-b78c25991275",
    plusOne: true,
    attending: false,
  },
  {
    name: "Dayana Reilly",
    id: "f82f64ff-3361-4f45-ad73-ad6ef930d5c4",
    plusOne: true,
    attending: true,
  },
  {
    name: "Grady Bode",
    id: "325ce32d-2bb7-4e0b-9dd9-741c5199eb99",
    plusOne: true,
    attending: false,
  },
  {
    name: "Asha Hansen",
    id: "57362683-9291-4ee5-8b8b-53264f635ac1",
    plusOne: true,
    attending: true,
  },
  {
    name: "Charley Stokes",
    id: "9aedf543-1637-4f6c-a635-897b69facf73",
    plusOne: false,
    attending: false,
  },
  {
    name: "Misty Lowe",
    id: "b697c8ad-8aae-4de1-9f1b-0b7080ca8c86",
    plusOne: true,
    attending: false,
  },
  {
    name: "Gavin Ratke",
    id: "28998697-3389-46dc-a699-710b209f5997",
    plusOne: true,
    attending: true,
  },
  {
    name: "Bernita Moore",
    id: "e9bd6c63-c75a-4fe9-8de8-1cade912fec5",
    plusOne: true,
    attending: true,
  },
  {
    name: "Nerijus",
    id: "5f11f2d3-a06a-4f5f-9f76-66e44c4a8a12",
    plusOne: true,
    attending: true,
  },
  {
    name: "Murl Windler",
    id: "ef6e713c-1970-4736-9c0f-295c2f5b5e89",
    plusOne: false,
    attending: false,
  },
  {
    name: "Jessy Senger",
    id: "4a1ef0b8-f3ea-4992-b93e-09d0b79e35a6",
    plusOne: false,
    attending: true,
  },
  {
    name: "Florian Swaniawski",
    id: "9c5559b2-24e8-4c86-82a2-9707bdd4433b",
    plusOne: false,
    attending: false,
  },
  {
    name: "Salvatore O'Connell",
    id: "d7701ae5-63a7-4480-9573-2a79740f1847",
    plusOne: true,
    attending: false,
  },
  {
    name: "Ressie Brown",
    id: "395db879-27db-44f1-b709-3e92f35e6523",
    plusOne: false,
    attending: true,
  },
  {
    name: "Braeden Marks",
    id: "3beda615-ce7f-4389-984b-621700a21000",
    plusOne: false,
    attending: false,
  },
  {
    name: "Amely Cronin",
    id: "53ff9273-2c5b-463e-81d3-124a1123cfe7",
    plusOne: true,
    attending: false,
  },
  {
    name: "Khalid Stanton",
    id: "1386e1f4-2687-4e8c-bbba-85e19c545721",
    plusOne: true,
    attending: false,
  },
  {
    name: "Jessy Crooks",
    id: "d8305999-8e0b-4c63-a6b0-97140fbbd5e9",
    plusOne: true,
    attending: false,
  },
  {
    name: "Paulius",
    id: "b3393c09-fc0c-4add-87d8-e42de6c012d1",
    plusOne: true,
    attending: true,
  },
  {
    name: "Vince Herman",
    id: "9d3c08d3-8b0c-4471-95b2-c4a40e9c5008",
    plusOne: true,
    attending: false,
  },
  {
    name: "Irving Harber",
    id: "890594b1-77c3-4cde-8589-c615b8820c9c",
    plusOne: true,
    attending: false,
  },
  {
    name: "Cornell Roob",
    id: "715cd657-3c4d-41da-aad8-cc354b8f7021",
    plusOne: false,
    attending: true,
  },
  {
    name: "Marcelino Stehr",
    id: "54284e96-ea15-49bd-aeda-ae150ca5fd7c",
    plusOne: false,
    attending: false,
  },
  {
    name: "Cleveland Walter",
    id: "32bd8fce-12be-441a-a760-51ac03f148e3",
    plusOne: true,
    attending: true,
  },
  {
    name: "Kade Hauck",
    id: "d4369ce2-3fb4-45d5-a299-54c1d8f4de1d",
    plusOne: false,
    attending: false,
  },
  {
    name: "Augustine Botsford",
    id: "36592be0-c65f-4a6c-ba46-c84ed0498693",
    plusOne: false,
    attending: true,
  },
  {
    name: "Jany Waelchi",
    id: "24bf1b35-dded-42d2-84d9-345ed934b62f",
    plusOne: true,
    attending: true,
  },
];

document.querySelector(".r").addEventListener("click", () => {
  fetch("https://academy-year-2021.herokuapp.com/week-3/wedding")
    .then((response) => response.json())
    .then((result) => {
      let n = result.reduce((r, value, index, array) => {
        if (array[index].attending && array[index].plusOne) {
          r.push(array[index]);
        }
        return r;
      }, []);
      console.log(n);
    })
    .catch((error) => console.log(error));
});
