import SectionAddModal from "../../components/kitchen/kitchenModal/SectionAddModal";
import SectionEditModal from "../../components/kitchen/kitchenModal/SectionEditModal";
import ActiveTab from "../../components/kitchen/myKitchenSection/ActiveTab";
import NavButton from "../../components/kitchen/myKitchenSection/NavButton";
import { BiTransfer } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router";
import { useState } from "react";
import { ThreeCommonButton } from "../../components/common/ThreeCommonButton";
import { useEffect } from "react";
import axios from "axios";
import { SectionsProvider } from "../../helper/useContexts/ScrollableButtonsKitchenContext";
import { ScrollableButtonKitchen } from "../../components/kitchen/common/ScrollableButtonKitchen";


export const KitchenHome = () => {
  const [popUp, setPopUp] = useState(false);
  const [lastAddedSection, setLastAddedSection] = useState(null);
  const [selectedSectionForEdit, setSelectedSectionForEdit] = useState(null);
  const [sections, setSections] = useState([]);
  const [chefName, setChefName] = useState([]);

            //  <ScrollableButton buttonLabels={sections} />


const handleAddSection = (newSection) => {
//   setLastAddedSection(newSection);
//   // Create a copy of the existing sections using slice and then append the new section
//   setSections((prev) => {
//     const newSections = prev.slice();  // Create a shallow copy of the array
//     newSections.push(newSection);      // Add the new section to the end of the copied array
//     return newSections;               // Return the updated array
//   });
};


  // Open edit modal for last added section
const handleEditClick = () => {
  // const fallbackSection = sections.length > 0 ? sections[sections.length - 1] : null;
  // const sectionToEdit = lastAddedSection || fallbackSection;

  // if (!sectionToEdit) {
  //   alert("No section available to edit!");
  //   return;
  // }
  // setSelectedSectionForEdit(sectionToEdit);
  document.getElementById("edit_modal").showModal();
  console.log("sections")
};
   // Only dynamically generated section names are included now
  // const combinedButtonLabels = sections.map((section) => section.name);
  return (
    <div>
      <div className="pb-24 max-w-screen-lg mx-auto sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="mt-4 flex flex-wrap justify-between gap-2 items-center">
          <div className="relative">
            <button
              onClick={() => setPopUp(!popUp)}
              className="text-orange-500 bg-white border-y-orange-500 border-2 px-5 py-2 rounded-lg shadow"
            >
              Action
            </button>
            {popUp && (
              <div className="absolute left-0 mt-2 w-36 p-2 rounded shadow-md flex flex-col justify-end space-y-2 z-50 bg-white">
                <a href="#" className="bg-white text-orange-500 flex justify-center rounded-2xl border-2">Manage Order</a>
                <a href="#" className="bg-white text-orange-500 flex justify-center rounded-2xl border-2">Check Delivery</a>
                <a href="#" className="bg-white text-orange-500 flex justify-center rounded-2xl border-2">View Orders</a>
              </div>
            )}
          </div>

          <p className="font-bold text-sm sm:text-base">My Kitchen</p>

          <button
            className="text-orange-500 bg-white border-y-orange-500 border-2 px-5 py-2 rounded-lg shadow"
            onClick={() => document.getElementById("add_modal").showModal()}
          >
            Add Section
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-7">
          <ThreeCommonButton
            firstBtn="Section"
            firstUrl="/kitchen/home"
            secondBtn="Pantry-list"
            secondUrl="/kitchen/pantry-list"
            thirdBtn="Prep-list"
            thirdUrl="/kitchen/prep-list"
          />
        </div>

        {/* Scrollable Buttons (Static + Dynamic) */}
        <div className="rounded-md space-y-4 overflow-x-auto">
          <div className="mb-8">
            <SectionsProvider>
              <ScrollableButtonKitchen />
            </SectionsProvider>
          </div>

          {/* Ladder Info and Edit Button */}
          <div className="flex flex-wrap justify-between items-center mt-2 mb-6 gap-2">
            <h2 className="text-sm font-semibold text-gray-700">Ladder Detail Info :</h2>
            <button
              className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm"
              onClick={handleEditClick}
            >
              Edit Section
            </button>
          </div>

          {/* Modals */}
          <SectionAddModal 
           selectChef={chefName} />

         <SectionEditModal 
         selectSections={sections}
         selectChef={chefName} />

          <ActiveTab />
        </div>
      </div>
    </div>
  );
};