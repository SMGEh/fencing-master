import type { Photo, PhotoTab } from "../types/photos";

/*
 * One tab per folder in public/images/photos/.
 *
 * - label:  the name shown on the tab. Change it freely; the folder name stays the same.
 * - folder: the folder's exact name in public/images/photos/ (capital letters matter).
 * - files:  the photos in that folder, in the order they should appear.
 *
 * Tabs are sorted alphabetically by label, so the order here doesn't matter. To add a photo, put it in the folder and add its
 * file name to that tab's list. To add a tab, add a folder and a new entry.
 */
const tabs: { folder: string; label: string; files: string[] }[] = [
  {
    folder: "wpg",
    label: "West Point Grey Fencing Club",
    files: ["wpg_banner1.jpg", "wpg_group1.jpg"],
  },
  {
    folder: "sfu",
    label: "Simon Fraser University Fencing Club",
    files: ["sfu_bac1.jpg", "sfu_bac2.jpg", "sfu_banner1.jpg", "sfu_banner2.jpg", "sfu_banner3.jpg", "sfu_group1.jpg", "sfu_group2.jpg", "sfu_group3.jpg", "sfu_lesson1.jpg"],
  },
  {
    folder: "wVan",
    label: "West Vancouver Fencing Club",
    files: ["west_van_bac1.jpg", "west_van_banner1.jpg", "west_van_group1.jpg", "west_van_group2.jpg", "west_van_lesson1.jpg"],
  },
  {
    folder: "vtm",
    label: "Vancouver Theatrical & Modern Fencing Club",
    files: ["van_bac1.jpg", "van_bac2.jpg", "van_bout1.jpg", "van_group1.jpg", "van_lesson1.jpg", "van_theatrical1.jpg", "van_theatrical2.jpg"],
  },
  {
    folder: "theatrical",
    label: "Theatrical Fencing",
    files: ["theatrical_bac1.jpg", "theatrical_group1.jpg", "theatrical_group2.jpg", "theatrical_group3.jpg"],
  },
  {
    folder: "rich",
    label: "Richmond Fencing Club",
    files: ["rich.jpg", "richmond_bout1.jpg", "richmond_bout2.jpg", "richmond_bout3.jpg", "richmond_portrait1.jpg"],
  },
  {
    folder: "vsb",
    label: "Vancouver School Board Fencing Program",
    files: ["vsb_banner1.jpg", "vsb_bout1.jpg", "vsb_group1.jpg", "vsb_group2.jpg"],
  },
  {
    folder: "eagle",
    label: "Eagle Harbour Fencing Club",
    files: ["eagle_bac1.jpg", "eagle_banner1.jpg", "eagle_banner2.jpg", "eagle_group1.jpg", "eagle_group2.jpg", "eagle_group3.jpg"],
  },
  {
    folder: "jules",
    label: "Jules Quesnel Fencing Club",
    files: ["jules_banner1.jpg", "jules_bout1.jpg", "jules_group1.jpg", "jules_group2.jpg", "jules_group3.jpg", "jules_group4.jpg", "jules_group5.jpg"],
  },
  {
    folder: "bac",
    label: "Maître Bac Tau",
    files: ["bac_competition1.jpg", "bac_competition2.jpg", "bac_competition3.jpg", "bac_competition4.jpg", "bac_competition5.jpg", "bac_competition6.jpg", "bac_portrait1.jpg", "bac_portrait2.jpg", "bac_portrait3.jpg", "bac_timelapse.jpg", "bac_tv1.jpg", "bac_tv2.jpg"],
  },
  {
    folder: "book",
    label: "Fencing (Maître Bac Tau's book at the Olympic Museum)",
    files: ["all_books.jpg", "olympic_museum.jpg", "red_book1.jpg", "red_book2.jpg", "red_book3.jpg", "red_book4.jpg", "red_book5.jpg", "red_book6.jpg"],
  },
];

export const photoTabs: PhotoTab[] = tabs.map((t) => ({
  id: t.folder,
  label: t.label,
  photos: t.files.map(
    (file, i): Photo => ({
      src: `${import.meta.env.BASE_URL}images/photos/${t.folder}/${file}`,
      alt: `${t.label}, photo ${i + 1}`,
    }),
  ),
}))
  // Tabs are shown in alphabetical order by their label.
  .sort((a, b) => a.label.localeCompare(b.label, "en", { sensitivity: "base" }));
