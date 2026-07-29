import {
  PlayCircle,
  FileText,
  Smartphone,
  BookOpen,
  Video,
  BookMarked,
  Users,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    id: 1,
    slug: "video-pandawa",
    title: "Video Edukasi Panduan Layanan PANDAWA",
    description:
      "Kumpulan video edukasi mengenai layanan administrasi peserta melalui PANDAWA BPJS Kesehatan.",
    icon: PlayCircle,
    type: "video",
    externalLink: null,
    color:"blue",
  },

  {
    id: 2,
    slug: "brosur-pandawa",
    title: "Brosur Edukasi Panduan Layanan PANDAWA",
    description:
      "Kumpulan brosur edukasi layanan PANDAWA yang dapat dibaca maupun diunduh.",
    icon: FileText,
    type: "brosur",
    externalLink: null,
    color:"green",
  },

  {
    id: 3,
    slug: "video-mobile-jkn",
    title: "Video Edukasi Panduan Aplikasi Mobile JKN",
    description:
      "Panduan penggunaan berbagai fitur aplikasi Mobile JKN dalam bentuk video.",
    icon: Smartphone,
    type: "video",
    externalLink: null,
    color:"cyan",
  },

  {
    id: 4,
    slug: "brosur-mobile-jkn",
    title: "Brosur Edukasi Panduan Aplikasi Mobile JKN",
    description:
      "Brosur edukasi mengenai penggunaan aplikasi Mobile JKN bagi peserta JKN.",
    icon: BookOpen,
    type: "brosur",
    externalLink: null,
    color:"emerald",
  },

  {
    id: 5,
    slug: "video-informasi-bpjs",
    title: "Video Informasi Layanan BPJS Kesehatan",
    description:
      "Kumpulan video informasi layanan BPJS Kesehatan untuk peserta Program JKN.",
    icon: Video,
    type: "video",
    externalLink: null,
    color:"orange",
  },

  {
    id: 6,
    slug: "brosur-informasi-bpjs",
    title: "Brosur Informasi Layanan BPJS Kesehatan",
    description:
      "Berbagai brosur informasi resmi mengenai layanan dan program BPJS Kesehatan.",
    icon: BookMarked,
    type: "brosur",
    externalLink: null,
    color:"yellow",
  },

  {
    id: 7,
    slug: "bpjs-satu",
    title: "Daftar Nama Petugas BPJS SATU",
    description:
      "Informasi petugas BPJS SATU beserta kontak WhatsApp yang dapat dihubungi.",
    icon: Users,
    type: "petugas",
    externalLink: null,
    color:"purple",
  },

  {
    id: 8,
    slug: null,
    title: "Panduan Layanan",
    description:
      "Panduan lengkap layanan administrasi kepesertaan JKN dalam satu dokumen.",
    icon: ClipboardList,
    type: "panduan",
    color:"teal",
    externalLink:
      "https://drive.google.com/file/d/1lC15uPd3lTeHhiTuwmmkQdXFpZ0NkCkk/view?usp=drive_link",
  },
];

export default services;