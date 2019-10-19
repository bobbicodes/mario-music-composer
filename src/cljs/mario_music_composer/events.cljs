(ns mario-music-composer.events
  (:require
   [re-frame.core :as re-frame]
   [mario-music-composer.db :as db]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))
