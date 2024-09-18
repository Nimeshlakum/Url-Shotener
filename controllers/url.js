const shortid = require("shortid");
const { URL } = require("../models/url");

async function HandleHome(req, res) {
    try {
        // Fetch all URLs from the database
        const urls = await URL.find();
        // Pass the protocol and host to the view
        return res.render("home", {
            urls: urls,
            protocol: req.protocol,
            host: req.get('host')
        });
    } catch (error) {
        console.error("Error fetching URLs:", error);
        return res.status(500).json({ error: "An error occurred" });
    }
}

async function HandleDefaultRoute(req, res) {
    try {
        const shortId = req.params.shortId;

        const entry = await URL.findOneAndUpdate(
            { ShortId: shortId },
            {
                $push: {
                    VisiteHistory: {
                        Timestamp: Date.now(),
                    }
                }
            },
            { new: true }
        );

        if (!entry) {
            return res.status(404).json({ error: "URL not found" });
        }

        // Redirect to the original URL
        return res.redirect(entry.RedirectUrl); // Fix here
    } catch (error) {
        console.error("Error handling redirect:", error);
        return res.status(500).json({ error: "An error occurred" });
    }
}

async function HandleGenerateNewShortUrl(req, res) {
    try {
        const { url } = req.body;
        if (!url) return res.status(400).json({ error: "URL is required" });

        const shortId = shortid.generate();

        await URL.create({
            ShortId: shortId,
            RedirectUrl: url,
            VisiteHistory: []
        });

        return res.redirect("/"); // Fix here
    } catch (error) {
        console.error("Error generating short URL:", error);
        return res.status(500).json({ error: "An error occurred" });
    }
}

async function HandleUrlAnalytics(req, res) {
    try {
        const shortId = req.params.shortId;

        const urlData = await URL.findOne({ ShortId: shortId });

        if (!urlData) {
            return res.status(404).render("analytics", {
                protocol: req.protocol,
                host: req.get('host')
            });
        }

        return res.render("analytics", {
            urlData: urlData,
            protocol: req.protocol,
            host: req.get('host')
        });
    } catch (error) {
        console.error("Error fetching URL analytics:", error);
        return res.status(500).json({ error: "An error occurred" });
    }
}

async function HandleDeleteUrl(req, res) {
    try {
        const shortId = req.params.shortId;

        // Delete the URL entry by shortId
        const result = await URL.findOneAndDelete({ ShortId: shortId });

        if (!result) {
            return res.status(404).json({ error: "URL not found" });
        }

        // Redirect back to the home page after deletion
        return res.redirect("/"); // Fix here
    } catch (error) {
        console.error("Error deleting URL:", error);
        return res.status(500).json({ error: "An error occurred" });
    }
}

module.exports = {
    HandleHome,
    HandleGenerateNewShortUrl,
    HandleDefaultRoute,
    HandleUrlAnalytics,
    HandleDeleteUrl,
};
